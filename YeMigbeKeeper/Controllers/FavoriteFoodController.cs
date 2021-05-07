﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using YeMigbeKeeper.Models;
using YeMigbeKeeper.Repositories;

namespace YeMigbeKeeper.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteFoodController : ControllerBase
    {
        private readonly IFavoriteFoodRepository _favoriteFoodRepository;
        private readonly IUserRepository _userRepository;

        public FavoriteFoodController(IFavoriteFoodRepository favoriteFoodRepository, IUserRepository userRepository)
        {
            _favoriteFoodRepository = favoriteFoodRepository;
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {

            return Ok(_favoriteFoodRepository.GetAllFavoriteFoods());
        }

        [HttpGet("{userId}")]
        public IActionResult Get(int userId)
        {
            //User user = GetCurrentUser();
            var favoriteFood = _favoriteFoodRepository.GetFavoriteFoodByUserId(userId);
            if (favoriteFood == null)
            {
                return NotFound();
            }
            return Ok(favoriteFood);
        }


        // Retrieves the current user object by using the provided firebaseId
        private User GetCurrentUser()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userRepository.GetByFireBaseUserId(firebaseUserId);
        }
    }
}
