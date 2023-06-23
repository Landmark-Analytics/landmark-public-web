using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace LandmarkPublicWeb.TagHelpers
{
    [HtmlTargetElement(Attributes = "asp-page")]
    public class ActiveNavLink : TagHelper
    {

        [HtmlAttributeName("asp-active-class")]
        public string? ActiveClass { get; set; }

        [HtmlAttributeName("asp-page")]
        public string? Page { get; set; }

        [ViewContext]
        [HtmlAttributeNotBound]
        public ViewContext? ViewContextData { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            if (ActiveClass == null || Page == null || ViewContextData == null)
                return;

            output.Attributes.RemoveAll("asp-active-class");

            var currentPage = ViewContextData.RouteData.Values["page"];

            if (currentPage != null && currentPage.Equals(Page))
            {
                if (output.Attributes.ContainsName("class"))
                {
                    output.Attributes.SetAttribute("class", $"{output.Attributes["class"].Value} {ActiveClass}");
                }
                else
                {
                    output.Attributes.SetAttribute("class", ActiveClass);
                }
            }
        }
    }
}
