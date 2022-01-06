@extends('principal')

@section('conteudo')
@csrf
			<!-- page content -->
			<div class="right_col" role="main">
				<div class="">
					<div class="page-title">
						<div class="title_left">
							<h3></h3>
						</div>

					</div>
					<div class="clearfix"></div>
					<div class="row">
						<div class="col-md-12 col-sm-12 ">
							<div class="x_panel">
								<div class="x_title">
									<h2>Cadastro <small>Unidades</small></h2>
									<ul class="nav navbar-right panel_toolbox">
										<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
										</li>
										<li><a class="close-link"><i class="fa fa-close"></i></a>
										</li>
									</ul>
									<div class="clearfix"></div>
								</div>
								<div class="x_content">
									<br />
									<form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left">

										<div class="item form-group">
											<label class="col-form-label col-md-3 col-sm-3 label-align"
												for="nome">Nome <span class="required">*</span>
											</label>
											<div class="col-md-6 col-sm-6 ">
												<input type="text" id="nome" required="required"
													class="form-control" value="{{ $unidade->nome }}">
											</div>
										</div>
										<div class="item form-group">
											<label class="col-form-label col-md-3 col-sm-3 label-align"
												for="bairro">Bairro <span class="required">*</span>
											</label>
											<div class="col-md-6 col-sm-6 ">
												<input type="text" id="bairro" name="bairro" required="required"
													class="form-control" value="{{ $unidade->bairro }}">
											</div>
										</div>
										<div class="item form-group">
											<label for="cidade"
												class="col-form-label col-md-3 col-sm-3 label-align">Cidade
												<span class="required">*</span></label>
											<div class="col-md-6 col-sm-6 ">
												<input id="cidade" class="form-control" type="text"
													name="cidade" value="{{ $unidade->cidade }}">
											</div>
										</div>
										<div class="item form-group">
											<label for="estado"
												class="col-form-label col-md-3 col-sm-3 label-align">Estado
												<span class="required">*</span></label>
											<div class="col-md-6 col-sm-6 ">
												<input id="estado" class="form-control" type="text"
													name="estado" value="{{ $unidade->estado }}">
											</div>
										</div>
										<div class="ln_solid"></div>
										<div class="item form-group">
											<div class="col-md-6 col-sm-6 offset-md-3">
												<button class="btn btn-primary" type="button">Cancel</button>
												<button class="btn btn-primary" type="reset">Reset</button>
												<button type="submit" class="btn btn-success">Submit</button>
											</div>
										</div>

									</form>
								</div>
							</div>
						</div>
					</div>

					


				<!-- AQUIIIIII  -->

				</div>
			</div>
			<!-- /page content -->

@endsection
