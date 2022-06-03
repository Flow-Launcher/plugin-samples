using System.Collections.Generic;
using Flow.Launcher.Plugin;

namespace HelloWorldCSharp
{
    public class Main : IPlugin, IPluginI18n
    {
        internal PluginInitContext Context;

        public List<Result> Query(Query query)
        {
            var result = new Result
            {
                Title = "Hello World from CSharp",
                SubTitle = $"Query: {query.Search}",
                Action = c =>
                {
                    Context.API.ShowMsg(Context.API.GetTranslation("plugin_helloworldcsharp_greet_title"),
                                            Context.API.GetTranslation("plugin_helloworldcsharp_greet_subtitle"));
                    return true;
                },
                IcoPath = "Images/app.png"
            };
            return new List<Result> { result };
        }

        public void Init(PluginInitContext context)
        {
            Context = context;
        }

        public string GetTranslatedPluginTitle()
        {
            return Context.API.GetTranslation("plugin_helloworldcsharp_plugin_name");
        }

        public string GetTranslatedPluginDescription()
        {
            return Context.API.GetTranslation("plugin_helloworldcsharp_plugin_description");
        }
    }
}
