using Microsoft.AspNetCore.Mvc;
using adressapi.Models;
using System.Web.Http.Cors;

namespace adressapi.Controllers;

[ApiController]
[EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
[Route("/api/[controller]")]
public class AddressController : ControllerBase
{
  private Db _db;
  public AddressController(Db db)
  {
    _db = db;
  }

  [HttpGet]
  public List<Address> GetAllAddresses() {
    return _db.Addresses;
  }
  
  [HttpGet("{id:int}")]
  public Address? GetAddressById(int id)
  {
    return _db.Addresses.Find(d => d.Id == id);
  }
  
  [HttpGet("{name:alpha}")]
  public List<Address>? GetAddressesByStreet(string name)
  {
    return _db.Addresses.FindAll(d => d.Name == name);
  }

  [HttpDelete("{id}")]
  public HttpResponseMessage DeleteAddressById(int id)
  {
    var index = _db.Addresses.Find(d => d.Id == id);

    _db.Addresses.Remove(index);
    var response = new HttpResponseMessage();  
    response.Headers.Add("DeleteMessage", $"deleted {index.StreetName}");  
    return response;
  }

  [HttpPut("{id}")]
  public Address? UpdateAddressById(int id, CreateAddressRequest request)
  {
    var index = GetAddressById(id);
    var nextId = _db.Addresses.Count + 10;
    var updateAddress = new Address()
    {
      Id = id,
      Name = request.Name,
      Email = request.Email,
      StreetName = request.StreetName,
      Telephone = request.Telephone,
      PostalCode = request.PostalCode,
      City = request.City,
    };
    _db.Addresses.Remove(index);
    _db.Addresses.Add(updateAddress);
    var response = new HttpResponseMessage();  
    response.Headers.Add("Updated", $"update {index.StreetName}");  
    return GetAddressById(id);
  }

  [HttpPost]
  public IActionResult CreateNewAddress(CreateAddressRequest request)
  {
    // map from request to model
    var nextId = _db.Addresses.Count + 1;
    var newAddress = new Address()
    {
      Id = nextId,
      Name = request.Name,
      Email = request.Email,
      StreetName = request.StreetName,
      Telephone = request.Telephone,
      PostalCode = request.PostalCode,
      City = request.City,
    };

    _db.Addresses.Add(newAddress);

    return CreatedAtAction(nameof(GetAddressById), new { id = nextId }, newAddress);
  }
}