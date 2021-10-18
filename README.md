# RethinkFirstApp

This app provides an administrator's view of a patient-management portal complete with interactive CRUD operations.

## Setup

You will first need to setup a SQL Server instance. Once it's running, you can create a new database and run the scripts located in the [DatabaseScripts directory](./DatabaseScripts).
Be sure to run them in in alphabetical order.

Next note down your connection string and copy it over to the `RT1Model` field in [appsettings.Development.json](RT1.Web/appsettings.Development.json).

## Running The App

The easiest way is to launch the IIS Express debugger from Visual Studio 2019. You'll want to make sure you have it set up to launch a browser window when it debugs. Otherwise, you'll just have to navigate to either
[http://localhost:44355/](http://localhost:44355/).

## Architecture

### Unit Tests

Backend tests are powered by [XUnit](https://xunit.net/) and [Moq](https://github.com/moq/moq4).

Frontend tests are powered by [jest](https://jestjs.io/), [ng-mocks](https://ng-mocks.sudo.eu/), and [rxjs-marbles](https://github.com/cartant/rxjs-marbles).

For backend tests, the Visual Studio 2019 built-in test explorer is recommended to run the tests.
For the frontend, the tests can be run from the CLI with `ng test`.

### Backend

[SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2019) for the database.

[.NET 5](https://dotnet.microsoft.com/download) with
[ASP.NET Core - MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-5.0)
and [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)

[Automapper](https://automapper.org/) is also leveraged in this architecture.

For easy manual endpoint testing [Swagger UI](https://swagger.io/tools/swagger-ui/) is also integrated in with the development build.
It can be accessed at [http://localhost:44355/swagger](http://localhost:44355/swagger)

The Architecture is tiered with divisions between network logic (controller), business logic (service),
and data logic (data provider).

### Frontend

Build on [Angular 12](https://angular.io/) with [NgRx](https://ngrx.io/) for a front-end store.

For component libraries, both [PrimeNG](https://primefaces.org/primeng/)
and [Angular Material](https://material.angular.io/) are used.

Icons from both [PrimeNG](https://primefaces.org/primeng/)
([PrimeIcons](https://www.primefaces.org/showcase-v8/ui/misc/primeicons.xhtml))
and [FontAwesome](https://fontawesome.com/) were leveraged as well.

Additional utility libraries are provided through [lodash-es](https://www.npmjs.com/package/lodash-es),
the tree-shakable build of the [lodash](https://lodash.com/) library.

### Additional Integrations

This app is build with [ESLint](https://eslint.org/) integration for its linting capabilities.
It is recommended to have the VSCode extensions installed for the full experience
(as recommended by the [ClientApp](./RT1.Web/ClientApp) project).

Besides the in-editor aids, ESLint can be run from the CLI via `ng lint`.

### Future Work

The front-end had a few hiccups, especially in getting all of the tooling set up.
The unit tests are therefore a bit lacking, those need to be fleshed out.

Additionally, there are a few minor UI formatting bugs that need to be addressed.

There was also a plan for a floating action button (FAB) to be positioned near one of the corners of the grid,
but it hadn't been implemented yet. The goal was for the FAB to facilitate creating a new user, and clicking on it would
bring up a dialog form to submit. It would also be nice to have implemented confirmation dialogs for edit, delete, etc.

Then authentication still needs to be set up on the backend.

Lastly, network errors need to be handled more robustly with better UI integration
(e.g. a toast-message system where CRUD action success is visually confirmed to the user,
and likewise action failure is also visully confirmed).

ADDENDUM:

There also seems to be an issue with Entity Framework handling bulk creation with how I have things set up.
The database is generating the primary keys via the `IDENTITY` function, but EF Core is throwing errors for
tracking the same entity, even though I'm using the `[DatabaseGenerated(DatabaseGeneratedOption.Identity)]` attribute.
