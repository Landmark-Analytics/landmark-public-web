using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LandmarkPublicWeb.Pages
{
  public class IndustryModel : PageModel
  {
    private readonly ILogger<IndustryModel> _logger;

    public IndustryModel(ILogger<IndustryModel> logger)
    {
      _logger = logger;
    }

    public void OnGet()
    {
    }
  }
}
