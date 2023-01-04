using adressapi.Models;

public class Db 
{
    public Db()
    {
      Addresses = new List<Address>() {
      new Address() { Id = 0, StreetName = "ljungmyrsvägen", StreetNo = 1, PostalCode = 12444, City = "Stockholm" },
      new Address() { Id = 1, StreetName = "testtest", StreetNo = 24, PostalCode = 20224, City = "malmö" },
      };
    }
    public List<Address> Addresses { get; set; }
}