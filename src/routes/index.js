const express = require ('express');
const router = express.Router();
const user = require ('../controllers')
    

router.get ('/usuarios/listar', user.getList);
router.post ('/usuarios/guardar', user.saveUser);   
router.delete ('/usuarios/borrar/:id', user.deleteUser);  
router.put ('/usuarios/modificar/:id', user.updateUser);


module.exports = router; 
