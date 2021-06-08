from django.urls import path
from . import views
from django.views.generic import TemplateView

app_name = 'authen'

urlpatterns = [
    path('', TemplateView.as_view(template_name="authen/index.html")),
    path('login/', views.login_request, name="login"),
    path("logout/", views.login_request, name= "logout"),
    path('register/', TemplateView.as_view(template_name="authen/register.html")),
    path('forgot_passwd/', TemplateView.as_view(template_name="authen/forgot_passwd.html")),
]