using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Diagnostics;

namespace LandmarkPublicWeb.Pages
{
  [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
  [IgnoreAntiforgeryToken]
  public class ErrorModel : PageModel
  {

    public int OriginalStatusCode { get; set; }

    public string? OriginalPathAndQuery { get; set; }

    public string? RequestId { get; set; }

    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

    private readonly ILogger<ErrorModel> _logger;

    public ErrorModel(ILogger<ErrorModel> logger)
    {
      _logger = logger;
    }

    public void OnGet(int statusCode)
    {
      RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;

      OriginalStatusCode = statusCode;

      var statusCodeReExecuteFeature =
          HttpContext.Features.Get<IStatusCodeReExecuteFeature>();

      if (statusCodeReExecuteFeature is not null)
      {
        OriginalPathAndQuery = string.Join(
            statusCodeReExecuteFeature.OriginalPathBase,
            statusCodeReExecuteFeature.OriginalPath,
            statusCodeReExecuteFeature.OriginalQueryString);
      }
    }
  }
}
