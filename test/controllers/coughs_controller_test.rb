require 'test_helper'

class CoughsControllerTest < ActionController::TestCase
  setup do
    @cough = coughs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:coughs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create cough" do
    assert_difference('Cough.count') do
      post :create, cough: { age: @cough.age, frequency: @cough.frequency, type: @cough.type }
    end

    assert_redirected_to cough_path(assigns(:cough))
  end

  test "should show cough" do
    get :show, id: @cough
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @cough
    assert_response :success
  end

  test "should update cough" do
    patch :update, id: @cough, cough: { age: @cough.age, frequency: @cough.frequency, type: @cough.type }
    assert_redirected_to cough_path(assigns(:cough))
  end

  test "should destroy cough" do
    assert_difference('Cough.count', -1) do
      delete :destroy, id: @cough
    end

    assert_redirected_to coughs_path
  end
end
