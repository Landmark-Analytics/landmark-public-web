using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace landmark_public_web.Pages
{
    public class AboutModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public AboutModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet() { }
    }
}
