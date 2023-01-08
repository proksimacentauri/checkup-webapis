using adressapi.Models;

public class Db 
{
    public Db()
    {
      Addresses = new List<Address>() {
      new Address() { Id = 0, Name = "Donna", Email = "donna@test.com",  StreetName = "ljungmyrsvägen 24", Telephone = "+4676182902", PostalCode = 12444, City = "Stockholm" },
      new Address() { Id = 1, Name = "test", Email = "donna@test.com", StreetName = "testtest 13", Telephone = "+2312312313", PostalCode = 20224, City = "malmö" },
      };
    }
    public List<Address> Addresses { get; set; }
}