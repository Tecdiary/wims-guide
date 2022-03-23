### Frequently Asked Questions

We have tried to list some frequently asked questions. This page will be updated time to time with new FAQs.

## General

### How many items can be managed with this Warehouse Inventory Management Solution?

You can have any number of items, it all depends on your machine/server.

### Can I modify the item?

Yes, as per license and at your own risk. We don't offer support for modifications and modified versions.

### Can I sell the item?

No. You can't sell the item under any license. However if you have purchased Extended license, you can use it for SaaS (Software as a Service) or can create an end product that can be installed unlimited times. You will need separate license for each SaaS use or end product.

### Can I manage multiple warehouse/godown?

Yes, if you have installed it on live server you can manage multiple warehouse with single installation. If it's install with localhost, then I am not sure, unless you can access it from other warehouses.

### Can I white label it to have my company name and logo?

No, there is no option to change icon. Please update the Name in settings, you can upload the warehouse logo (will be used on check in/out, adjustment & transfer view pages).

### How can I change the warehouse logo?

Please upload the new logo by editing the warehouse.

### How can I translate into other language?

Please duplicate `resources/lang/en.json` then translate it. Once translated, you can edit `resources/js/Core/i18n.js` to import the language file. Lastly run `npm i` && `npm run prod` to build the application.

### How can I disable/enable Weight tracking?

You can disable/enable weight tracking from settings page. If enable, all the items with track weight option will be sync on new orders.

### Can I install this item on localhost?

Yes, you can install this item on localhost with any web platform xampp, mamp, lamp, wamp or easyphp. Internet connectivity is required for installation to verify the purchase. Once installed, you can use it without Internet.

### Can I use it offline if I have installed it on live server?

WIMS has option to cache the get requests only. You won't be able to post any data but if you have visited the page before and Internet is down, you will be able to view the page (it will be loaded from cache).

### Will I get the full source code?

Yes, for Standard and Extended Licenses. For Regular license, you will only get back-end code and won't be able to modify the front-end.

### How can I setup cron job?

You can setup cron job as following:

```
* * * * * cd path/to/your/wims && php artisan schedule:run >> /dev/null 2>&1
```

If you need help, please check with your host and ask them how you can setup cron job for Laravel, docs can be found at [https://laravel.com/docs/scheduling](https://laravel.com/docs/scheduling)

### Why I need to set cron job?

Cron job need to be set to generate recurring check in/out and send low stock notifications.

## Users

### How many user roles are available?

WIMS has 1 default `Super Admin` Role that can perform all actions. However you can add new roles and set permissions as you need.

### Where can I assign role to user?

While adding/editing the user, you have the option to select roles.

### Can I add new user role?

From Add Role link under Users menu.

## Errors

### Why am I getting CloudFlare Security or Blank error on verification while installation the item?

If you are not getting any error but blank red alert or CloudFlare Security error mean your request is no reaching to verification server. Please check that you server is not blocking the curl request and secondly there are chances that CloudFlare might be challenging your request due to various reasons. Please check with your host and request them to white list CloudFlare IPs https://www.cloudflare.com/ips Updating your Anti-Virus and Browser might help. You can check with your host too.

You can try different host and/or install it locally with any web platform `easyphp` / `lamp` / `mamp` / `wamp` / `xampp`.

### Why am I getting 500 Internal Server Error?

You shouldn't get such error if the server requirements were fine while installing the item.

500 are server internal errors and you can check your server error log to get more details of the error, if you are on live server and not sure, you
can check with your host. Once you have the error details please post on support portal (https://tecdiary.net/support) with details, we will check and suggest you the solution.

You can check the Laravel logs in `storage/logs` folder too.

### MySQL cannot connect via "localhost" but only "127.0.0.1"?

MySQL will try to connect to the unix socket if you tell it to connect to "localhost". If you tell it to connect to 127.0.0.1 you are forcing it to connect to the network socket. So probably you have MySQL configured to only listen to the network socket and not to the file system socket.

What exactly is wrong with your unix socket is hard to tell. But I recommend you to [read this page](http://dev.mysql.com/doc/refman/5.5/en/can-not-connect-to-server.html) on the MySQL reference guide.

### Why I can't send emails?

Please double check your email configuration in .env file.

### Why I am getting db error and can't login?

Please make sure that your database server is up and running, then check .env file in main directory for database configuration.

### Why some items are missing from order when I add 50+ services?

There is no restriction in WIMS code on the number of order services. If you are having such issue, please check your PHP configuration file (php.ini) for `max_input_vars` and set it to higher number i.e, 20000. You might need to increase `max_input_time` and `max_execution_time` too.
