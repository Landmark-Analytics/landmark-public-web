using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace LandmarkPublicWeb.Pages
{
  public class SolutionsModel : PageModel
  {
    private readonly ILogger<SolutionsModel> _logger;

    public SolutionsModel(ILogger<SolutionsModel> logger)
    {
      _logger = logger;
    }

    public void OnGet() { }
  }
}
