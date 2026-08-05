# Temmora Backend Setup Guide

This document outlines the architecture required for the upcoming Supabase and Lemon Squeezy integration. **Do not create these manually yet**—this is the reference architecture we will build against in the next phase.

## 1. Supabase Database Architecture

The following tables must be created to manage customers, templates, and purchases.

### `users`
Stores customer information securely.
- `id` (uuid, primary key)
- `email` (string, unique)
- `name` (string)
- `created_at` (timestamp)

### `templates`
Stores the actual digital products (the templates).
- `id` (uuid, primary key)
- `slug` (string, unique)
- `name` (string)
- `description` (text)
- `price` (numeric)
- `original_price` (numeric)
- `category` (string)
- `creator` (string)
- `published_date` (timestamp)
- `status` (string)

### `purchases`
Stores completed, verified transactions.
- `id` (uuid, primary key)
- `user_id` (uuid, foreign key -> users.id)
- `template_id` (uuid, foreign key -> templates.id)
- `purchase_type` (string: "template_only" | "template_setup")
- `amount` (numeric)
- `payment_status` (string)
- `created_at` (timestamp)

### `bundles`
Tracks when multiple templates are bought together.
- `id` (uuid, primary key)
- `user_id` (uuid, foreign key -> users.id)
- `discount` (numeric)
- `total_amount` (numeric)

### `licenses`
Stores customer usage rights and ties them to a purchase.
- `id` (uuid, primary key)
- `purchase_id` (uuid, foreign key -> purchases.id)
- `license_type` (string)
- `commercial_use` (boolean)
- `resale_allowed` (boolean)

---

## 2. Lemon Squeezy Preparation

### Product & Variant Structure
For each template in `templates`, create a corresponding Product in Lemon Squeezy.
Create two Variants per Product:
1. **Template Only** (Base Price)
2. **Template + Professional Setup** (Base Price + Setup Price)

### Checkout Architecture
The frontend will use the Lemon Squeezy API to generate dynamic checkout URLs based on the user's cart selection in the `BundleContext`.

### Webhook Flow
When a purchase completes in Lemon Squeezy, a webhook must trigger a secure Edge Function (or serverless endpoint) to verify the payload signature before writing to Supabase.

#### Template Only Flow
1. Customer initiates checkout from Temmora.
2. Lemon Squeezy Checkout completes payment.
3. Lemon Squeezy sends webhook to API endpoint.
4. API endpoint verifies signature & creates Supabase `purchases` record.
5. Customer is instantly granted access to template files and licenses.

#### Template + Setup Flow
1. Customer initiates checkout from Temmora.
2. Lemon Squeezy Checkout completes payment.
3. Webhook creates Supabase `purchases` record with `purchase_type: template_setup`.
4. Manual Setup Workflow begins (Customer receives setup questionnaire/booking link).
