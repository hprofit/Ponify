var should = require('chai').should(),
    Ponify = require('../index');

describe('ponify', function() {
    it("converts 'anyone' to 'anypony'", function() {
        Ponify.ponify("anyone").should.equal("anypony");
    });
    it("converts 'anybody' to 'anypony'", function() {
        Ponify.ponify("anybody").should.equal("anypony");
    });
    it("converts 'kid' to 'foal'", function() {
        Ponify.ponify("kid").should.equal("foal");
    });
    it("converts 'kids' to 'foals'", function() {
        Ponify.ponify("kids").should.equal("foals");
    });
    it("converts 'girls' to 'fillies'", function() {
        Ponify.ponify("girls").should.equal("fillies");
    });
    it("converts 'girl' to 'filly'", function() {
        Ponify.ponify("girl").should.equal("filly");
    });
    it("converts 'woman' to 'mare'", function() {
        Ponify.ponify("woman").should.equal("mare");
    });
    it("converts 'women' to 'mares'", function() {
        Ponify.ponify("women").should.equal("mares");
    });
    it("converts 'boys' to 'colts'", function() {
        Ponify.ponify("boys").should.equal("colts");
    });
    it("converts 'boy' to 'colt'", function() {
        Ponify.ponify("boy").should.equal("colt");
    });
    it("converts 'man' to 'stallion'", function() {
        Ponify.ponify("man").should.equal("stallion");
    });
    it("converts 'men' to 'stallions'", function() {
        Ponify.ponify("men").should.equal("stallions");
    });
    it("converts 'hell' to 'hay'", function() {
        Ponify.ponify("hell").should.equal("hay");
    });
    it("converts 'everyone' to 'everypony'", function() {
        Ponify.ponify("everyone").should.equal("everypony");
    });
    it("converts 'everybody' to 'everypony'", function() {
        Ponify.ponify("everybody").should.equal("everypony");
    });
    it("converts 'hand' to 'hoof'", function() {
        Ponify.ponify("hand").should.equal("hoof");
    });
    it("converts 'hands' to 'hooves'", function() {
        Ponify.ponify("hands").should.equal("hooves");
    });
    it("converts 'high five' to 'brohoof'", function() {
        Ponify.ponify("high five").should.equal("brohoof");
    });
    it("converts 'high-five' to 'brohoof'", function() {
        Ponify.ponify("high-five").should.equal("brohoof");
    });


    it("converts 'Anyone' to 'Anypony'", function() {
        Ponify.ponify("Anyone").should.equal("Anypony");
    });
    it("converts 'Anybody' to 'Anypony'", function() {
        Ponify.ponify("Anybody").should.equal("Anypony");
    });
    it("converts 'Kid' to 'Foal'", function() {
        Ponify.ponify("Kid").should.equal("Foal");
    });
    it("converts 'Kids' to 'Foals'", function() {
        Ponify.ponify("Kids").should.equal("Foals");
    });
    it("converts 'Girls' to 'Fillies'", function() {
        Ponify.ponify("Girls").should.equal("Fillies");
    });
    it("converts 'Girl' to 'Filly'", function() {
        Ponify.ponify("Girl").should.equal("Filly");
    });
    it("converts 'Woman' to 'Mare'", function() {
        Ponify.ponify("Woman").should.equal("Mare");
    });
    it("converts 'Women' to 'Mares'", function() {
        Ponify.ponify("Women").should.equal("Mares");
    });
    it("converts 'Boys' to 'Colts'", function() {
        Ponify.ponify("Boys").should.equal("Colts");
    });
    it("converts 'Boy' to 'Colt'", function() {
        Ponify.ponify("Boy").should.equal("Colt");
    });
    it("converts 'Man' to 'Stallion'", function() {
        Ponify.ponify("Man").should.equal("Stallion");
    });
    it("converts 'Men' to 'Stallions'", function() {
        Ponify.ponify("Men").should.equal("Stallions");
    });
    it("converts 'Hell' to 'Hay'", function() {
        Ponify.ponify("Hell").should.equal("Hay");
    });
    it("converts 'Everyone' to 'Everypony'", function() {
        Ponify.ponify("Everyone").should.equal("Everypony");
    });
    it("converts 'Everybody' to 'Everypony'", function() {
        Ponify.ponify("Everybody").should.equal("Everypony");
    });
    it("converts 'Hand' to 'Hoof'", function() {
        Ponify.ponify("Hand").should.equal("Hoof");
    });
    it("converts 'Hands' to 'Hooves'", function() {
        Ponify.ponify("Hands").should.equal("Hooves");
    });
    it("converts 'High five' to 'Brohoof'", function() {
        Ponify.ponify("High five").should.equal("Brohoof");
    });
    it("converts 'High-five' to 'Brohoof'", function() {
        Ponify.ponify("High-five").should.equal("Brohoof");
    });
});