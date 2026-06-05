(function () {
  // Register a very small preview template for the "pages" collection.
  // This uses the CDN-loaded Decap CMS and returns an HTML string for preview.
  function registerWhenReady() {
    if (window.CMS && typeof window.CMS.registerPreviewTemplate === 'function') {
      window.CMS.registerPreviewTemplate('pages', function (entry, widgetFor) {
        // entry is an Immutable Map; use getIn to access fields
        var title = '';
        try {
          title = entry.getIn(['data', 'title']) || '';
        } catch (e) {
          // fallback for unexpected entry shape
          title = (entry && entry.title) || '';
        }
        var bodyHtml = '';
        try {
          bodyHtml = widgetFor('body') || '';
        } catch (e) {
          bodyHtml = '';
        }
        return '<div class="cms-preview"><h1>' +
          escapeHtml(title) +
          '</h1><div class="cms-preview-body">' +
          bodyHtml +
          '</div></div>';
      });
    } else {
      // Retry until CMS is available
      setTimeout(registerWhenReady, 100);
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  registerWhenReady();
})();
