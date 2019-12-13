
-- return a list of all ingredients and quantities for a given recipe
select rd.quantity
    , i.ingredient_name
FROM [recipes] as r
join recipe_details as rd on r.id = rd.recipe_id
join ingredients as i on rd.ingredient_id = i.id
where r.id = 1
order by i.ingredient_name;