
export const isEmptyFormFunctionsByEntityName = {
  user: (form, { isEdit, isNew }) => {
    return isEdit && form && Object.keys(form).length === 0
  }
}
