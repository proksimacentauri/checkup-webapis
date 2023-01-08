namespace adressapi.Models;

public class Address
{
  public int? Id { get; set; }
  public string? Name { get; set; }
  public string? Email { get; set; }
  public string? StreetName { get; set; }
  public string? Telephone{ get; set; }
  public int? PostalCode { get; set; }
  public string? City { get; set; }
}