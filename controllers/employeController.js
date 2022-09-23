const db = require('../database/models')
const Employe = db.Employe



const store = async (req, res) => {
    try{
        const save = await Employe.create(req.body)
        res.json(save).status(200)
    } catch(error) {
        res.json(error).status(422)
    }
}

const index = async (req, res) => {
    try{
        const result = await Employe.findAndCountAll()
        res.json(result).status(200)
    } catch(error) {
        res.json(error).status(422)
    }
}

const show = async (req, res) => {
    try{
        const id = req.params.id
        const data = await Employe.findByPk(id)
        const result = data ? data : `${id} not found in database`
        res.json(result).status(200)
    } catch (error) {
        res.json(error).status(422)
    }
}

const update = async (req, res) => {
    Employe.findByPk(req.params.id).then((emp) => {
        if(emp){
            emp.update(req.body)
            msg = emp
        }else{
            msq = `${req.params.id} not found in database`
        }
        res.json({message:msg})
    }).catch((error) => {
        res.json({ msg:error.message});
    });
}

const destroy = async (req, res) => {
    let msg
    Employe.findByPk(req.params.id).then((row) => {
        if(row){
            row.destroy()
            msg = 'Successfully deleted'
        }else{
            msg = `${req.params.id} not found in database`
        }
        res.json({message:msg})
    }). catch((error) => {
        res.json({ msg:error.message});
    })
}

module.exports = {
    index, show, store, update, destroy
}