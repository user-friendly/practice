ABOUT
=====

System Design Document


ONLINE SHOP
-----------

A mid-sized e-commerce business with millions of customers struggles with inventory management - they're constantly dealing with stale stock and out-of-stocks because they can't react quickly to the high volume of daily transactions and customer purchase trends, or proactively forecast while trends are still emerging. Their analysts spend too much time gathering data from multiple systems instead of analyzing it. The business wants to solve these inventory issues by getting better visibility into customer purchase patterns.

Put together a high-level design for system(s) or dataset(s) that a data analyst or data scientist can easily work with. As a pilot problem, the business wants to know 'what inventory is most at risk of going out of stock in a week'. Focus less on particular ML models and more how you would architect the data flows.


Design product mid/large business.

100,000,000 products.

REQUIREMENTS
------------

Non-functional:
1. Millions of customers - transactions per hour/day/week? volume of stream of data?
2. Gathering data for analyst (what system used?) is slow, draws from multiple sources (which sources?)
3. Repository of data?

Functional:
1. About 10 million customers.
2. Each customer buys 5 items per day.
3. A dozen (~12) analysts will use the analytics system.
4. Interface with inventory system.

About 50 million sales per day.

API
---

POST /sale {
	customer id,
	product id,
	quantity,
	timestamp (Unix ts, UTC)
}


NOTES
-----

Speed			- How fast something is moving. Change of position over time.
Velocity		- How fast something is moving, direction of movement. The magnitude is speed, orientation relative to origin is direction. Origin usually is the object itself.
Acceleration	- The rate of change in velocity. In calc terms, the derivative of velocity.

Velocity of a product:
	- includes sold
	- includes restocks (brought)
	- sum of sold - restocks, per delta time
