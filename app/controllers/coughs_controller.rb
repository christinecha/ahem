class CoughsController < ApplicationController
  before_action :set_cough, only: [:show, :edit, :update, :destroy]

  # GET /coughs
  # GET /coughs.json
  def index
    @coughs = Cough.all
  end

  # GET /coughs/1
  # GET /coughs/1.json
  def show
    @cough = Cough.find(params[:id])
  end

  # GET /coughs/new
  def new
    @cough = Cough.new
  end

  # GET /coughs/1/edit
  def edit
  end

  # POST /coughs
  # POST /coughs.json
  def create
    @cough = Cough.new(cough_params)
    respond_to do |format|
      if @cough.save
        format.html { redirect_to @cough, notice: 'Cough was successfully created.' }
        format.json { render :show, status: :created, location: @cough }
      else
        format.html { render :new }
        format.json { render json: @cough.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /coughs/1
  # PATCH/PUT /coughs/1.json
  def update
    respond_to do |format|
      if @cough.update(cough_params)
        format.html { redirect_to @cough, notice: 'Cough was successfully updated.' }
        format.json { render :show, status: :ok, location: @cough }
      else
        format.html { render :edit }
        format.json { render json: @cough.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /coughs/1
  # DELETE /coughs/1.json
  def destroy
    @cough.destroy
    respond_to do |format|
      format.html { redirect_to coughs_url, notice: 'Cough was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cough
      @cough = Cough.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cough_params
      params.require(:cough).permit(:type, :frequency, :age)
    end
end
