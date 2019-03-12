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
            "James Ashley",
            "Gian Paolo Santopaolo",
            "Håkan Silfvernagel",
            "Brenno de Winter",
            "Sander Hoogendoorn",
            "Sander Duivestein",
            "Pat Hermens",
            "Alessandro Vozza",
            "Joost van Schaik",
            "Henk Boelman",
            "Edwin van Wijk",
            "Sakia Groenewegen",
            "Dennis Vroegop",
            "Jan de Vries",
            "Geert van der Cruijsen",
            "Eldert Grootenboer",
            "Eduardo Leegwater Simões",
            "Bas Niesink",
            "Rick van den Bosch",
            "Carl in 't Veld",
            "Jan Willem Groenenberg",
            "Hans Boksem",
            "Sander Gerz",
            "Remi Caron",
            "Sascha Wolter",
            "Martin Opdam",
            "Alex de Groot",
            "Roelant Dieben",
            "Dave Smits",
            "Thomas de Klerk"
         };

        #endregion

        [FunctionName("ValuesFunction")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "values")] HttpRequest req, 
            ILogger log)
        {
            log.LogInformation("We're logging something here because the Function was called. So there.");

            return await Task.FromResult(new OkObjectResult(VALUES));
        }
    }
}