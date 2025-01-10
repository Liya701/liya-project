
using System.Reflection.Metadata;

class Program
{
  static void Main()
  {
    User[] users = [];

    int port = 5000;
   

    var server = new Server(port);

    Console.WriteLine("The server is running");
    Console.WriteLine($"Main Page: http://localhost:{port}/website/pages/index.html");

    while (true)
    {
      (var request, var response) = server.WaitForRequest();

      Console.WriteLine($"Recieved a request with the path: {request.Path}");

      if (File.Exists(request.Path))
      {
        var file = new File(request.Path);
        response.Send(file);
      }
      else if (request.ExpectsHtml())
      {
        var file = new File("website/pages/404.html");
        response.SetStatusCode(404);
        response.Send(file);
      }
      else
      {
        try
        {
          if (request.Path == "signup")
          {

            (string username, string password) = request.GetBody<(string, string)>();
            string userId = Guid.NewGuid().ToString();
            users = [.. users, new User(username, password, userId)];
            response.Send(userId);
          }
          if (request.Path == "login")
          {
            (string username, string password) = request.GetBody<(string, string)>();
            string? userId = null;
            for (int i = 0; i < users.Length; i++)
            {
              if (username == users[i].username && password == users[i].password)
              {
                userId = users[i].id;
              }
            }
        
           
           
  
            response.Send(userId);














          }
          response.SetStatusCode(405);
        }
        catch (Exception exception)
        {
          Log.WriteException(exception);
        }
      }

      response.Close();
    }
  }
}

class User
{
  public string username;
  public string password;
  public string id;
  public bool[] favorites;

  public User(string username, string password, string id)
  {
    this.username = username;
    this.password = password;
    this.id = id;
    favorites = [false,false, false,false, false,false, false, false, false, false];

  }
}

