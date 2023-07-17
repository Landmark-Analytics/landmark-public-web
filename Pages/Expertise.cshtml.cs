using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LandmarkPublicWeb.Pages
{
  public class ExpertiseModel : PageModel
  {
    private readonly ILogger<ExpertiseModel> _logger;

    public ExpertiseModel(ILogger<ExpertiseModel> logger)
    {
      _logger = logger;
    }

    public void OnGet()
    {
    }
  }
}
