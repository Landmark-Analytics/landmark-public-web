using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LandmarkPublicWeb.Pages
{
  public class IndustriesModel : PageModel
  {
    private readonly ILogger<IndustriesModel> _logger;

    public IndustriesModel(ILogger<IndustriesModel> logger)
    {
      _logger = logger;
    }

    public void OnGet()
    {
    }
  }
}
