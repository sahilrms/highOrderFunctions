let items=[{
    "item_name":"pencil",
    "item_cost":0.5,
    "currency":"Dollar"
},{
    "item_name":"rubber",
    "item_cost":1,
    "currency":"Dollar"
},{
    "item_name":"sharpner",
    "item_cost":1.25,
    "currency":"Dollar"
},{
    "item_name":"pencil box",
    "item_cost":3.75,
    "currency":"Dollar"
},{
    "item_name":"sketch colors",
    "item_cost":4.45,
    "currency":"Dollar"
}]

let newItems = items.map((item)=> {
  return { "item_name":item.item_name,
    "item_cost":item.item_cost*80,
    "currency":"inr"
}
})
console.log("in Dollar \n")
console.log(items)
console.log("in Rupees \n")
console.log(newItems)
