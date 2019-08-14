'use strict';

function solve() {
    let library = (function() {
        let books = [];
        let categories = [];

        function listBooksSortedBy(propertyToBeSortedBy) {
            if (propertyToBeSortedBy !== 'author' && propertyToBeSortedBy !== 'category') {
                propertyToBeSortedBy = 'ISBN';
            }

            return books
                .sort((a, b) => a[propertyToBeSortedBy].localeCompare(b[propertyToBeSortedBy]))
                .map(x => `${x.ISBN} - ${x.title} by ${x.author}, category ${x.category}`);
        }

        function addBook(book) {
            categories.push({
                bookCategoryID: book.categoryID = books.length,
                bookCategory: bookCategory = book.category
            });


            if (book.title.length < 2 && book.title.length > 100 && book.category.length < 2 && book.category.length > 100) {
                throw 'Book title and category name must be between 2 and 100 characters';
            }

            let regexISBN = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
            if (!regexISBN.test(book.ISBN)) {
                throw 'Not valid ISBN!';
            }

            if (books.some(currentBook => currentBook.ISBN === book.ISBN)) {
                throw 'Book with this name is already added!'
            }

            if (books.some(currentBook => currentBook.title === book.title)) {
                throw 'Book with this name is already added!'
            }

            if (book.author.length < 2) {
                throw 'Not valid name!'
            }

            books.push(book);
            return book;
        }

        function listCategories() {
            return categories
                .sort((a, b) => b.bookCategoryID - a.bookCategoryID)
                .map(x => `Category ${x.bookCategory} - Id ${x.bookCategoryID}`);
        }

        return {
            books: {
                list: listBooksSortedBy,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());
    return library;
}

let book1 = {
    ISBN: ISBN = '978-3-16-148410-0',
    title: title = 'potter',
    author: author = 'Ivan Vazovb',
    category: category = 'comedy'
};

let book2 = {
    ISBN: ISBN = '978-5-16-148410-0',
    title: title = 'potterr',
    author: author = 'Ivan Vazov',
    category: category = 'aomedy'
};

let book3 = {
    ISBN: ISBN = '978-4-16-148410-0',
    title: title = 'pottert',
    author: author = 'Ivan Vazova',
    category: category = 'bomedy'
};



let library = solve();
library.books.add(book1);
library.books.add(book2);
library.books.add(book3);


console.log(library.books.list('ISBN'));
console.log(library.books.list('category'));
console.log(library.books.list('author'));

console.log(library.categories.list());