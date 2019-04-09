using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;

namespace SAFwAD.Functions
{
    public static class ValuesFunction
    {
        #region Private fields

        private static readonly string[] VALUES = new[]
        {
            "There are three letters in your alphabet which are not found in the English – Æ, Ø and Å",
            "Denmark is very flat, the tallest point is 170 meters",
            "Denmark is the longest uninterrupted monarchy in Europe",
            "In Denmark, you can’t be further away from the ocean than one hour (up to 52 km)",
            "A Dane invented Lego",
            "You have the oldest and the second oldest amusement park in the world (Bakken and Tivoli)",
            "Denmark has the oldest film making company in the world (Nordisk film)",
            "It rains almost every other day (170 days a year)",
            "Dannebrog, your flag, is the oldest state flag in the world still in use by an independent nation",
            "Health care is free",
            "Education is also free",
            "Denmark has been awarded 14 Nobel prizes and with 5.6 million inhabitants, that's one of the highest per capita ratio in the world",
            "Denmark is one of the least corrupt countries in the world",
            "Denmark became the first country to legalise same-sex unions in 1989",
            "There are actually sharks living in your waters",
            "Denmark has 444 islands, but only 76 of them are inhabited",
            "You were the first country to legalise porn in 1969"
         };

        #endregion

        [FunctionName("ValuesFunction")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "values")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("We're logging something here because the Function was called. So there :p.");

            return await Task.FromResult(new OkObjectResult(VALUES));
        }
    }
}