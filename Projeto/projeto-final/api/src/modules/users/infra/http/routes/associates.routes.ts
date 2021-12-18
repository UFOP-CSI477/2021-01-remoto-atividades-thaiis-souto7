import { Router } from 'express';
import { CreateAssociateController } from '../controllers/associates/CreateAssociateController';
import { DeleteAssociateController } from '../controllers/associates/DeleteAssociateController';
import { ListAssociatesController } from '../controllers/associates/ListAssociatesController';
import { UpdateAssociateController } from '../controllers/associates/UpdateAssociateController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const createAssociateController = new CreateAssociateController();
const listAssociatesController = new ListAssociatesController();
const deleteAssociateController = new DeleteAssociateController();
const updateAssociateController = new UpdateAssociateController();

const associatesRouter = Router();

// associatesRouter.use(ensureAuthenticated);

associatesRouter.get('/', async (request, response) => {
  await listAssociatesController.handle(request, response);
});

associatesRouter.post('/', async (request, response) => {
  await createAssociateController.handle(request, response);
});

associatesRouter.delete('/:id', async (request, response) => {
  await deleteAssociateController.handle(request, response);
});

associatesRouter.put('/:id', async (request, response) => {
  await updateAssociateController.handle(request, response);
});

export default associatesRouter;
