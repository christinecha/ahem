class AddAudioFileToCoughs < ActiveRecord::Migration
  def change
    add_column :coughs, :audio_file, :string
  end
end
