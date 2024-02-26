import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const AboutPage = () => {
  const [formArrayCustom, setFormArrayCustom] = useState([{
    id: uuidv4(),
    name: '',
    activities: [
      {
        id: uuidv4(),
        name: ''
      }
    ]
  }]);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('[FORM-VALUES]', formArrayCustom)
  }
  const onChangeValue = (e, id) => {
    const { name, value } = e.target;
    const newFormArrayCustom = formArrayCustom.map((element) => {
      if (id === element.id) {
        return {
          ...element,
          [name]: value
        }
      }
      return {
        ...element
      }
    });
    setFormArrayCustom([...newFormArrayCustom]);

    console.log(name, value, id);
  }

  const deleteItem = (id) => {
    if (formArrayCustom.length <= 1) {
      return;
    }
    const newFormArrayCustom = formArrayCustom.filter((e) => e.id != id);
    setFormArrayCustom([...newFormArrayCustom]);
  }

  const addActivity = (id) => {
    const newFormArrayCustom = formArrayCustom.map((element) => {
      if (id === element.id) {
        return {
          ...element,
          activities: [...element.activities,
          {
            id: uuidv4(),
            name: ''
          }
          ]
        }
      }
      return {
        ...element
      }
    });
    setFormArrayCustom([...newFormArrayCustom]);
  }

  const deleteActivity = (parentId, id) => {
    const values = [...formArrayCustom];
    if (values[parentId].activities.length <= 1) {
      return;
    }
    values[parentId].activities.splice(id, 1);
    setFormArrayCustom([...values]);
  }

  const onChangeValueActivity = (e, idParent, id) => {
    const { name, value } = e.target;
    const newFormArrayCustom = formArrayCustom.map((element) => {
      if (idParent === element.id) {
        let activities = [...element.activities];
        const newActivities = activities.map((activity) => {
          if (activity.id === id) {
            return {
              ...activity,
              [name]: value
            }
          }
          return { ...activity }
        });
        return {
          ...element,
          activities: [...newActivities]
        }
      }
      return {
        ...element
      }
    });
    setFormArrayCustom([...newFormArrayCustom]);
    console.log(name, value, idParent, id);
  }

  return (
    <>
      <div>About.page</div>
      <h2>Lista de Hijos:</h2>
      <form className="mt-3 d-flex flex-column gap-4" onSubmit={onSubmit}>
        {
          formArrayCustom.map((element, i) => {
            return (
              <div className="row" style={{ 'width': '100%' }} key={element.id}>
                <div className="col-9">
                  <div>
                    <h3>*Nombre de Hijo({i + 1}):</h3>
                    <input className="form-control" name="name" value={element.name} type="text" onChange={(e) => onChangeValue(e, element.id)} autoComplete="off" />
                  </div>
                  <div className="mt-3">
                    <h5>Actividades favoritas</h5>
                    <div className="d-flex flex-column gap-2">
                      {element.activities.map((activity, index) => {

                        return (
                          <div key={activity.id} className="row" style={{ 'width': '100%' }}>
                            <div className="col-8 d-flex gap-2">
                              <span>{i + 1}.{index + 1}</span>
                              <input className="form-control" name="name" value={activity.name} type="text" autoComplete="off"
                                onChange={(e) => onChangeValueActivity(e, element.id, activity.id)} />
                            </div>
                            <div className="col-2">
                              <button type="button" className="btn btn-success" onClick={() => addActivity(element.id)}>ADD</button>
                            </div>
                            <div className="col-2">
                              <button type="button" className="btn btn-danger" onClick={() => deleteActivity(i, index)}>DELETE</button>
                            </div>

                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <button type="button" className="btn btn-success" onClick={() => setFormArrayCustom([...formArrayCustom, {
                    id: uuidv4(),
                    name: '',
                    activities: [
                      {
                        id: uuidv4(),
                        name: ''
                      }
                    ]
                  }])}>ADD</button>
                </div>
                <div className="col-1">
                  <button type="button" className="btn btn-danger" onClick={() => deleteItem(element.id)}>DELETE</button>
                </div>
              </div>)
          })
        }

        <button type="submit" className="btn btn-success mt-3">SEND</button>

      </form></>
  )
}
