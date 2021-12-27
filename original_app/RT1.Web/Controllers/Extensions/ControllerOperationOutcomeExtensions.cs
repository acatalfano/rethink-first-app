using Microsoft.AspNetCore.Mvc;

using RT1.Model.Dtos.OperationOutcome;

namespace RT1.Web.Controllers.Extensions
{
    public static class ControllerOperationOutcomeExtensions
    {
        public static ActionResult GetStatusCode(
            this ControllerBase controller,
            OperationOutcome operationOutcome)
        {
            return operationOutcome.GetStatusCode(controller);
        }

        public static ActionResult<T> GetStatusCode<T>(
            this ControllerBase controller,
            OperationOutcome<T> operationOutcome
        ) where T : class
        {
            return operationOutcome.GetStatusCode(controller);
        }
    }
}
