using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;

namespace SuperHeroDB.Service
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class SuperHeroService
    {
        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json)]
        public List<SuperHero> GetAllHeroes()
        {
            return Data.SuperHeroes;
        }

        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json, UriTemplate = "GetHero/{id}")]
        public SuperHero GetHero(string id)
        {
            return Data.SuperHeroes.Find(sh => sh.Id == int.Parse(id));
        }

        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "AddHero", Method = "POST")]
        public SuperHero AddHero(SuperHero hero)
        {
            hero.Id = Data.SuperHeroes.Max(sh => sh.Id) + 1;
            Data.SuperHeroes.Add(hero);
            return hero;
        }

        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "UpdateHero/{id}", Method = "PUT")]
        public SuperHero UpdateHero(SuperHero updatedHero, string id)
        {
            SuperHero hero = Data.SuperHeroes.Where(sh => sh.Id == int.Parse(id)).FirstOrDefault();

            hero.FirstName = updatedHero.FirstName;
            hero.LastName = updatedHero.LastName;
            hero.HeroName = updatedHero.HeroName;
            hero.PlaceOfBirth = updatedHero.PlaceOfBirth;
            hero.Combat = updatedHero.Combat;

            return hero;
        }

        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "DeleteHero/{id}", Method = "DELETE")]
        public List<SuperHero> DeleteHero(string id)
        {
            Data.SuperHeroes = Data.SuperHeroes.Where(sh => sh.Id != int.Parse(id)).ToList();

            return Data.SuperHeroes;
        }

        [OperationContract]
        [WebInvoke(ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
            UriTemplate = "SearchHero/{searchText}", Method = "GET")]
        public List<SuperHero> SearchHero(string searchText)
        {
            List<SuperHero> result = Data.SuperHeroes
                .Where<SuperHero>(sh => sh.FirstName.ToLower().Contains(searchText)
                || sh.LastName.ToLower().Contains(searchText)
                || sh.HeroName.ToLower().Contains(searchText)
                || sh.PlaceOfBirth.ToLower().Contains(searchText))
                .ToList<SuperHero>();

            return result;
        }
    }
}
