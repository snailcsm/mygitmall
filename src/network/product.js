import {NewRequest} from "./newRequest";

export function getCategory() {
return NewRequest({
  url:'/category'
})
}
export function getSubcategory(maitKey) {
  return NewRequest({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return NewRequest({
    url:'/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
