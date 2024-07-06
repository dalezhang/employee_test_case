Test case 2: SQL
==================

You are given a table in postgres which is a list of employees with their salaries and departments. You need to write a query that will select the person with the maximum salary from each department (or several if the amounts are the same).

You can use dump of table [employee.sql](employee.sql) as a test data, sample schema:

```
postgres=# \d employee
            Table "public.employee"
   Column   |         Type          | Modifiers
------------+-----------------------+-----------
 id         | integer               | not null
 name       | character varying(30) |
 department | character varying(30) |
 salary     | integer               |
Indexes:
    "employee_pkey" PRIMARY KEY, btree (id)
```

## Solution:

```sql
SELECT e.department, e.salary, e.id
FROM employee e
JOIN (
    SELECT department, MAX(salary) as max_salary
    FROM employee
    GROUP BY department
) em ON e.department = em.department AND e.salary = em.max_salary ORDER BY e.department;
```
