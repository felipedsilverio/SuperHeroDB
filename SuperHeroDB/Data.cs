using System.Collections.Generic;

namespace SuperHeroDB
{
    public class Data
    {
        public static List<SuperHero> SuperHeroes = new List<SuperHero>
        {
            new SuperHero { Id = 0, FirstName = "Peter", LastName = "Parker", HeroName = "Spider-Man", PlaceOfBirth = "New York", Combat = 85 },
            new SuperHero { Id = 1, FirstName = "Bruce", LastName = "Wayne", HeroName = "Batman", PlaceOfBirth = "Gotham City", Combat = 100 },
            new SuperHero { Id = 2, FirstName = "Tony", LastName = "Stark", HeroName = "Iron Man", PlaceOfBirth = "Long Island, New York", Combat = 65 },
            new SuperHero { Id = 3, FirstName = "Bruce", LastName = "Banner", HeroName = "Hulk", PlaceOfBirth = "Dayton", Combat = 85 },
            new SuperHero { Id = 4, FirstName = "James", LastName = "Howlett", HeroName = "Wolverine", PlaceOfBirth = "Alberta", Combat = 100 },
            new SuperHero { Id = 5, FirstName = "Stephen", LastName = "Strange", HeroName = "Doctor Strange", PlaceOfBirth = "Philadelphia", Combat = 60 },
        };
    }
}