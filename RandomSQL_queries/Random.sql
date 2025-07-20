DDL COMMANDS:
CREATE
ALTER TABLE
DROP
TRUNCATE
RENAME

DRL COMMANDS:
SELECT

DML COMMANDS:
INSERT
UPDATE
DELETE

TCL COMMANDS:
COMMIT
ROLLBACK
SAVEPOINT

SELECT * from CUSTOMERS WHERE age > 30;

select * from orders where age between 0 and 100;

select * from offices where off_name in ('Lakshya', 'Lakshya 2', 'Lakshya 3');

select * from data where name id not null;

select * from customer where name like '%k__';

select * from customer order by name asc;

select region, sum(amount) as total_amount //In SELECT, include All the columns used in GROUP BY
from sales
group by region;

select region, count(product) as total_products
from sales
group by region;

select distinct department, salary from employees;

select region, sum(amount) as total_sales
from sales
group by region
having total_sales > 2000;

create table orders (id int primary key, delivery_date date, order_date date, cust_id int, foreign key (cust_id) references customer(id));

alter table customers drop column middle_name;

alter table customer rename to customer_detials;

