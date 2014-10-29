module.exports = {
    ponify: function(string) {
        return String(string)
            // capitalize wom(a/e)n
            .replace(/Woman/g, 'Mare')
            .replace(/Women/g, 'Mares')

            // lower case
            .replace(/anyone/g, 'anypony')
            .replace(/anybody/g, 'anypony')

            .replace(/kid/g, 'foal')
            .replace(/kids/g, 'foals')

            .replace(/girls/g, 'fillies')
            .replace(/girl/g, 'filly')

            .replace(/woman/g, 'mare')
            .replace(/women/g, 'mares')

            .replace(/boys/g, 'colts')
            .replace(/boy/g, 'colt')

            .replace(/man/g, 'stallion')
            .replace(/men/g, 'stallions')

            .replace(/hell/g, 'hay')

            .replace(/everyone/g, 'everypony')
            .replace(/everybody/g, 'everypony')

            .replace(/hands/g, 'hooves')
            .replace(/hand/g, 'hoof')

            .replace(/high five/g, 'brohoof')
            .replace(/high-five/g, 'brohoof')


            // capitalized
            .replace(/Anyone/g, 'Anypony')
            .replace(/Anybody/g, 'Anypony')

            .replace(/Kid/g, 'Foal')
            .replace(/Kids/g, 'Foals')

            .replace(/Girls/g, 'Fillies')
            .replace(/Girl/g, 'Filly')

            .replace(/Boys/g, 'Colts')
            .replace(/Boy/g, 'Colt')

            .replace(/Man/g, 'Stallion')
            .replace(/Men/g, 'Stallions')

            .replace(/Hell/g, 'Hay')

            .replace(/Everyone/g, 'Everypony')
            .replace(/Everybody/g, 'Everypony')

            .replace(/Hands/g, 'Hooves')
            .replace(/Hand/g, 'Hoof')

            .replace(/High five/g, 'Brohoof')
            .replace(/High-five/g, 'Brohoof')
    }
};
