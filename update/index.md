---
title: Update Guide
editLink: false
head:
  - - meta
    - name: description
      content: Update instructions for Warehouse Inventory Management Solution WIMS
  - - meta
    - name: keywords
      content: WIMS, Warehouse Inventory, Warehouse Stock,
---

### Update Guide

**_Please backup database and all files/folders before starting to update._**

## Update Instructions

Please download the latest file and update the following files & folder of your WIMS install:

- `app/`
- `database/`
- `public/`
- `resources/`
- `routes/`
- `vendor/`
- `composer.json`
- `composer.lock`

Now if you can login as `super admin` then you can visit `http://yourWIMSURL/update/database` otherwise you will need to update the database by running the following command from your main WIMS folder.

```bash
cd path/to/your/wims
php artisan app:update
```

## Request Update

We encourage you to try updating yourself. However if you need update service, please open ticket for _Update Request_ at [Support Portal](https://tecdiary.net/support) (update fee $20 - $40) and provide your `license key` & `server details` (access to files & database). We will required 1 working day to perform update.
