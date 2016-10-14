var assert = require( "assert");
var inflect = require( '../index.js');

describe( 'Inflect Test', function(){

	it( 'should return correct for +', function(){
		var word = inflect( "минут", 1, ["","а","ы"]);

		assert.equal( inflect( "минут", 0, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 1, ["","а","ы"]), "минута");
		assert.equal( inflect( "минут", 2, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", 3, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", 4, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", 5, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 6, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 7, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 8, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 9, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 10, ["","а","ы"]), "минут");

		assert.equal( inflect( "минут", 11, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 12, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 13, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 14, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 15, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 16, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 17, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 18, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 19, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 20, ["","а","ы"]), "минут");

		assert.equal( inflect( "минут", 21, ["","а","ы"]), "минута");
		assert.equal( inflect( "минут", 22, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", 23, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", 24, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", 25, ["","а","ы"]), "минут");

		assert.equal( inflect( "минут", 50, ["","а","ы"]), "минут");

		assert.equal( inflect( "минут", 100, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 101, ["","а","ы"]), "минута");
		assert.equal( inflect( "минут", 110, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 111, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 112, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 113, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 114, ["","а","ы"]), "минут");

		assert.equal( inflect( "минут", 1352, ["","а","ы"]), "минуты");

		assert.equal( inflect( "метр", 1, ["ов","","а"]), "метр");
		assert.equal( inflect( "метр", 5, ["ов","","а"]), "метров");
		assert.equal( inflect( "метр", 11, ["ов","","а"]), "метров");
		assert.equal( inflect( "метр", 12, ["ов","","а"]), "метров");
		assert.equal( inflect( "метр", 15, ["ов","","а"]), "метров");
		assert.equal( inflect( "метр", 22, ["ов","","а"]), "метра");
		assert.equal( inflect( "метр", 11231231235, ["ов","","а"]), "метров");

		assert.equal( inflect( "километр", 1, ["ов","","а"]), "километр");
		assert.equal( inflect( "километр", 2, ["ов","","а"]), "километра");
		assert.equal( inflect( "километр", 10, ["ов","","а"]), "километров");
		assert.equal( inflect( "километр", 20, ["ов","","а"]), "километров");
		assert.equal( inflect( "километр", 113, ["ов","","а"]), "километров");

	});

	it( 'should return correct for -', function(){
		var word = inflect( "минут", -1, ["","а","ы"]);

		assert.equal( inflect( "минут",  0, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -1, ["","а","ы"]), "минута");
		assert.equal( inflect( "минут", -2, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", -4, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", -5, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -10, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -11, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -14, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -50, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -110, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -1352, ["","а","ы"]), "минуты");
	});
});