function create_menu(basepath)
{
	var base = (basepath == 'null') ? '' : basepath;

	document.write(
		'<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
		'<td class="td" valign="top">' +

		'<ul>' +
		'<li><a href="'+base+'index.html" title="User Guide Home">Kullanıcı Kılavuzu Ana Sayfası</a></li>' +	
		'<li><a href="'+base+'toc.html" title="Table of Contents Page">İçindekiler</a></li>' +
		'</ul>' +	

		'<h3 title="Basic Info">Temel Bilgiler</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/requirements.html" title="Server Requirements">Sunucu Gereksinimleri</a></li>' +
			'<li><a href="'+base+'license.html" title="License Agreement">Lisans Anlaşması</a></li>' +
			'<li><a href="'+base+'changelog.html">Change Log</a></li>' +
			'<li><a href="'+base+'general/credits.html">Credits</a></li>' +
		'</ul>' +	
		
		'<h3 title="Installation">Kurulum</h3>' +
		'<ul>' +
			'<li><a href="'+base+'installation/downloads.html" title="Downloading CodeIgniter">CodeIgniter\'ı İndir</a></li>' +
			'<li><a href="'+base+'installation/index.html">Installation Instructions</a></li>' +
			'<li><a href="'+base+'installation/upgrading.html">Upgrading from a Previous Version</a></li>' +
			'<li><a href="'+base+'installation/troubleshooting.html">Troubleshooting</a></li>' +
		'</ul>' +
		
		'<h3>Introduction</h3>' +
		'<ul>' +
			'<li><a href="'+base+'overview/getting_started.html">Getting Started</a></li>' +
			'<li><a href="'+base+'overview/at_a_glance.html">CodeIgniter at a Glance</a></li>' +
			'<li><a href="'+base+'overview/cheatsheets.html">CodeIgniter Cheatsheets</a></li>' +
			'<li><a href="'+base+'overview/features.html">Supported Features</a></li>' +
			'<li><a href="'+base+'overview/appflow.html">Application Flow Chart</a></li>' +
			'<li><a href="'+base+'overview/mvc.html">Model-View-Controller</a></li>' +
			'<li><a href="'+base+'overview/goals.html">Architectural Goals</a></li>' +
		'</ul>' +	

				
		'</td><td class="td_sep" valign="top">' +

		'<h3>General Topics</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/urls.html">CodeIgniter URLs</a></li>' +
			'<li><a href="'+base+'general/controllers.html">Controllers</a></li>' +
			'<li><a href="'+base+'general/reserved_names.html">Reserved Names</a></li>' +
			'<li><a href="'+base+'general/views.html">Views</a></li>' +
			'<li><a href="'+base+'general/models.html">Models</a></li>' +
			'<li><a href="'+base+'general/helpers.html">Helpers</a></li>' +
			'<li><a href="'+base+'general/plugins.html">Plugins</a></li>' +
			'<li><a href="'+base+'general/libraries.html">Using CodeIgniter Libraries</a></li>' +
			'<li><a href="'+base+'general/creating_libraries.html">Creating Your Own Libraries</a></li>' +
			'<li><a href="'+base+'general/core_classes.html">Creating Core Classes</a></li>' +
			'<li><a href="'+base+'general/hooks.html">Hooks - Extending the Core</a></li>' +
			'<li><a href="'+base+'general/autoloader.html">Auto-loading Resources</a></li>' +
			'<li><a href="'+base+'general/common_functions.html">Common Functions</a></li>' +
			'<li><a href="'+base+'general/scaffolding.html">Scaffolding</a></li>' +
			'<li><a href="'+base+'general/routing.html">URI Routing</a></li>' +
			'<li><a href="'+base+'general/errors.html">Error Handling</a></li>' +
			'<li><a href="'+base+'general/caching.html">Caching</a></li>' +
			'<li><a href="'+base+'general/profiling.html">Profiling Your Application</a></li>' +
			'<li><a href="'+base+'general/managing_apps.html">Managing Applications</a></li>' +
			'<li><a href="'+base+'general/alternative_php.html">Alternative PHP Syntax</a></li>' +
			'<li><a href="'+base+'general/security.html">Security</a></li>' +
			'<li><a href="'+base+'general/styleguide.html">PHP Style Guide</a></li>' +
			'<li><a href="'+base+'doc_style/index.html">Writing Documentation</a></li>' +
		'</ul>' +
		
		'</td><td class="td_sep" valign="top">' +

				
		'<h3>Class Reference</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/benchmark.html">Benchmarking Class</a></li>' +
		'<li><a href="'+base+'libraries/calendar.html">Calendar Class</a></li>' +
		'<li><a href="'+base+'libraries/cart.html">Cart Class</a></li>' +
		'<li><a href="'+base+'libraries/config.html">Config Class</a></li>' +
		'<li><a href="'+base+'database/index.html">Database Class</a></li>' +
		'<li><a href="'+base+'libraries/email.html">Email Class</a></li>' +
		'<li><a href="'+base+'libraries/encryption.html">Encryption Class</a></li>' +
		'<li><a href="'+base+'libraries/file_uploading.html">File Uploading Class</a></li>' +
		'<li><a href="'+base+'libraries/form_validation.html">Form Validation Class</a></li>' +
		'<li><a href="'+base+'libraries/ftp.html">FTP Class</a></li>' +
		'<li><a href="'+base+'libraries/table.html">HTML Table Class</a></li>' +
		'<li><a href="'+base+'libraries/image_lib.html">Image Manipulation Class</a></li>' +		
		'<li><a href="'+base+'libraries/input.html">Input and Security Class</a></li>' +
		'<li><a href="'+base+'libraries/loader.html">Loader Class</a></li>' +
		'<li><a href="'+base+'libraries/language.html">Language Class</a></li>' +
		'<li><a href="'+base+'libraries/output.html">Output Class</a></li>' +
		'<li><a href="'+base+'libraries/pagination.html">Pagination Class</a></li>' +
		'<li><a href="'+base+'libraries/sessions.html">Session Class</a></li>' +
		'<li><a href="'+base+'libraries/trackback.html">Trackback Class</a></li>' +
		'<li><a href="'+base+'libraries/parser.html">Template Parser Class</a></li>' +
		'<li><a href="'+base+'libraries/typography.html">Typography Class</a></li>' +		
		'<li><a href="'+base+'libraries/unit_testing.html">Unit Testing Class</a></li>' +
		'<li><a href="'+base+'libraries/uri.html">URI Class</a></li>' +
		'<li><a href="'+base+'libraries/user_agent.html">User Agent Class</a></li>' +
		'<li><a href="'+base+'libraries/xmlrpc.html">XML-RPC Class</a></li>' +
		'<li><a href="'+base+'libraries/zip.html">Zip Encoding Class</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Helper Reference</h3>' +
		'<ul>' +
		'<li><a href="'+base+'helpers/array_helper.html">Array Helper</a></li>' +
		'<li><a href="'+base+'helpers/compatibility_helper.html">Compatibility Helper</a></li>' +
		'<li><a href="'+base+'helpers/cookie_helper.html">Cookie Helper</a></li>' +
		'<li><a href="'+base+'helpers/date_helper.html">Date Helper</a></li>' +
		'<li><a href="'+base+'helpers/directory_helper.html">Directory Helper</a></li>' +
		'<li><a href="'+base+'helpers/download_helper.html">Download Helper</a></li>' +
		'<li><a href="'+base+'helpers/email_helper.html">Email Helper</a></li>' +
		'<li><a href="'+base+'helpers/file_helper.html">File Helper</a></li>' +
		'<li><a href="'+base+'helpers/form_helper.html">Form Helper</a></li>' +
		'<li><a href="'+base+'helpers/html_helper.html">HTML Helper</a></li>' +
		'<li><a href="'+base+'helpers/inflector_helper.html">Inflector Helper</a></li>' +
		'<li><a href="'+base+'helpers/language_helper.html">Language Helper</a></li>' +
		'<li><a href="'+base+'helpers/number_helper.html">Number Helper</a></li>' +
		'<li><a href="'+base+'helpers/path_helper.html">Path Helper</a></li>' +
		'<li><a href="'+base+'helpers/security_helper.html">Security Helper</a></li>' +
		'<li><a href="'+base+'helpers/smiley_helper.html">Smiley Helper</a></li>' +
		'<li><a href="'+base+'helpers/string_helper.html">String Helper</a></li>' +
		'<li><a href="'+base+'helpers/text_helper.html">Text Helper</a></li>' +
		'<li><a href="'+base+'helpers/typography_helper.html">Typography Helper</a></li>' +
		'<li><a href="'+base+'helpers/url_helper.html">URL Helper</a></li>' +
		'<li><a href="'+base+'helpers/xml_helper.html">XML Helper</a></li>' +
		'</ul>' +	


		'<h3>Additional Resources</h3>' +
		'<ul>' +
		'<li><a href="http://codeigniter.com/forums/">Community Forums</a></li>' +
		'<li><a href="http://codeigniter.com/wiki/">Community Wiki</a></li>' +
		'</ul>' +	
		
		'</td></tr></table>');
}