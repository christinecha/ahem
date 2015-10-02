json.array!(@coughs) do |cough|
  json.extract! cough, :id, :type, :frequency, :age
  json.url cough_url(cough, format: :json)
end
