define([
	"qunit",
	"inputmask.dependencyLib",
	"inputmask",
	"../dist/inputmask/inputmask.date.extensions",
	"../dist/inputmask/inputmask.extensions",
	"../dist/inputmask/inputmask.numeric.extensions",
	"../dist/inputmask/inputmask.phone.extensions",
	"../dist/inputmask/inputmask.regex.extensions",
	"prototypeExtensions",
	"simulator"
], function(qunit, $, Inputmask) {
	qunit.module("Attribute options");

	qunit.test("data-inputmask=\"'alias':'integer', 'integerDigits': 3, 'allowMinus': false, 'allowPlus': false\" - StennikovDmitriy", function(assert) {
		var $fixture = $("#qunit-fixture");
		$fixture.append('<input type="text" id="testmask" data-inputmask="\'alias\':\'integer\', \'integerDigits\': 3, \'allowMinus\': false, \'allowPlus\': false" />');
		var testmask = document.getElementById("testmask");
		Inputmask().mask(testmask);

		$("#testmask").Type("1234.56");
		assert.equal(testmask.value, "123", "Result " + testmask.value);
	});
});