var assert = require( "assert");
var inflect = require( '../index.js');

describe( 'Inflect Test', function(){

	it( 'should return correct for +', function(){
		var word = inflect( "минут", 1, ["","а","ы"]);

		assert.equal( inflect( "минут", 10, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 1, ["","а","ы"]), "минута");
		assert.equal( inflect( "минут", 11, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 110, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 2, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", 50, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 5, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 4, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", 14, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 0, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 1352, ["","а","ы"]), "минуты");

		assert.equal( inflect( "метр", 15, ["ов","","а"]), "метров");
		assert.equal( inflect( "метр", 12, ["ов","","а"]), "метров");
		assert.equal( inflect( "метр", 11, ["ов","","а"]), "метров");
		assert.equal( inflect( "метр", 22, ["ов","","а"]), "метра");
		assert.equal( inflect( "метр", 5, ["ов","","а"]), "метров");
		assert.equal( inflect( "метр", 1, ["ов","","а"]), "метр");
		assert.equal( inflect( "метр", 11231231235, ["ов","","а"]), "метров");
	});

	it( 'should return correct for -', function(){
		var word = inflect( "минут", -1, ["","а","ы"]);

		assert.equal( inflect( "минут", -10, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -1, ["","а","ы"]), "минута");
		assert.equal( inflect( "минут", -11, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -110, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -2, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", -50, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -5, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -4, ["","а","ы"]), "минуты");
		assert.equal( inflect( "минут", -14, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", 0, ["","а","ы"]), "минут");
		assert.equal( inflect( "минут", -1352, ["","а","ы"]), "минуты");
	});
});