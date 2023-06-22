using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace landmark_public_web.Pages
{
    public class ContactModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public ContactModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet() { }
    }
}
