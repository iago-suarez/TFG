import uuid

from django import template
from django.forms.widgets import Media
from django.utils.safestring import mark_safe
from django.core.urlresolvers import reverse

from django.conf import settings

PROGRESSBARUPLOAD_INCLUDE_JQUERY = getattr(settings,'PROGRESSBARUPLOAD_INCLUDE_JQUERY',True)

register = template.Library()


@register.simple_tag
def progress_bar():
    """
    progress_bar simple tag

    return html5 tag to display the progress bar
    and url of ajax function needed to get upload progress
    in site/js/progress_bar.js file.
    """
    progress_bar_tag = '<progress id="progressBar" ' \
        'data-progress_bar_uuid="%s" style="width:100%%" value="0" max="100" ' \
        'hidden></progress>' % (uuid.uuid4())
    upload_progress_url = '<script>upload_progress_url = "%s"</script>' \
        % (reverse('videoUpload:upload_progress'))
    return mark_safe(progress_bar_tag + upload_progress_url)


@register.simple_tag
def progress_bar_media():
    """
    progress_bar_media simple tag

    return rendered script tag for javascript used by progress_bar
    """
    if PROGRESSBARUPLOAD_INCLUDE_JQUERY:
        js = ["http://code.jquery.com/jquery-1.8.3.min.js",]
    else:
        js = []
    js.append("site/js/progress_bar.js")

    m = Media(js=js)
    return m.render()
