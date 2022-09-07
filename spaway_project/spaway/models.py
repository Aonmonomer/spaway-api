from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Spa(models.Model):
    spa_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    location = models.CharField(max_length=200)
    description = models.TextField()
    spa_image_url = models.TextField()

    def __str__(self):
        return self.spa_name


class Review(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='reviews')
    spa = models.ForeignKey(
        Spa, on_delete=models.CASCADE, related_name='reviews')
    title = models.CharField(max_length=200)
    review = models.TextField()
    rating = models.IntegerField()

    def __str__(self):
        return self.title
