let books=[{
    "book_name":"pencil",
    "item_cost":0.5,
    "currency":"Dollar",
    "author":'amin khan',
    "publish_year": 2012
},{
    "book_name":"rubber",
    "item_cost":1,
    "currency":"Dollar",
    "author":'y reddy',
    "publish_year": 2015
},{
    "book_name":"sharpner",
    "item_cost":1.25,
    "currency":"Dollar",
    "author":'p kumar',
    "publish_year": 2002
},{
    "book_name":"pencil box",
    "item_cost":3.75,
    "currency":"Dollar",
    "author":'ramesh kumar',
    "publish_year": 2007
},{
    "book_name":"sketch colors",
    "item_cost":4.45,
    "currency":"Dollar",
    "author":'anees hussain',
    "publish_year": 2019
}]

let bookAfter2010=books.filter((book)=>
    book.publish_year>=2010
)
console.log("bookAfter2010\n");
console.log(bookAfter2010);

let bookBefore2010=books.filter((book)=>
    book.publish_year<=2010
).map((book)=> {return ({"book_name":book?.book_name?.toUpperCase(),
"item_cost":book?.item_cost,
"currency":book?.currency,
"author":book?.author?.toUpperCase(),
"publish_year": book?.publish_year
})})

console.log("bookBefore2010\n");
console.log(bookBefore2010);