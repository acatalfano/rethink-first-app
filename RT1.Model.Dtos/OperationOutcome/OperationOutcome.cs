using System;

using Microsoft.AspNetCore.Mvc;

namespace RT1.Model.Dtos.OperationOutcome
{
    public class OperationOutcome
    {
        protected OperationStatus status;
        protected Exception exception;

        public void SetException(Exception exception)
        {
            this.exception = exception;
            status = OperationStatus.ServerError;
        }

        public void SetOK() => status = OperationStatus.Ok;
        public void SetBadRequest() => status = OperationStatus.BadRequest;
        public void SetNotFound() => status = OperationStatus.NotFound;

        public ActionResult GetStatusCode(ControllerBase controller)
        {
            switch (status)
            {
                case OperationStatus.Ok:
                    return controller.Ok();
                case OperationStatus.NotFound:
                    return controller.NotFound();
                case OperationStatus.BadRequest:
                    return controller.BadRequest();
                case OperationStatus.ServerError:
                default:
                    return controller.StatusCode(500, new { exception.Message });
            }
        }
    }

    public class OperationOutcome<T> : OperationOutcome
        where T : class
    {
        private T result;

        public void SetOK(T outcome)
        {
            var x = GetType();
            result = outcome;
            SetOK();
        }

        public new ActionResult<T> GetStatusCode(ControllerBase controller) =>
            status == OperationStatus.Ok ? controller.Ok(result) : base.GetStatusCode(controller);
    }
}
